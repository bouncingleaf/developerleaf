# S3 bucket for website.
resource "aws_s3_bucket" "b" {
  bucket = var.bucket_name
  tags = {
    site = var.domain_name
  }
}

resource "aws_s3_bucket_acl" "b_acl" {
  depends_on = [
#     aws_s3_bucket_public_access_block.bucket-public-access-block,
    aws_s3_bucket_ownership_controls.bucket-ownership-controls,
  ]
  bucket = aws_s3_bucket.b.bucket
  acl    = "private"
}

# resource "aws_s3_bucket_public_access_block" "bucket-public-access-block" {
#   bucket = aws_s3_bucket.b.id

#   block_public_acls       = true
#   block_public_policy     = true
#   ignore_public_acls      = true
#   restrict_public_buckets = true
# }

resource "aws_s3_bucket_ownership_controls" "bucket-ownership-controls" {
  bucket = aws_s3_bucket.b.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.b.bucket
  versioning_configuration {
    status = "Enabled"
  }
}

# resource "aws_s3_bucket_cors_configuration" "example" {
#   bucket = aws_s3_bucket.b.bucket
#   cors_rule {
#     allowed_headers = ["Authorization", "Content-Length"]
#     allowed_methods = ["GET", "POST"]
#     allowed_origins = ["https://${var.domain_name}"]
#     max_age_seconds = 3000
#   }
# }

resource "aws_s3_bucket_policy" "bucket-policy" {
  bucket = aws_s3_bucket.b.bucket
  policy = data.aws_iam_policy_document.iam_policy_s3.json
}

data "aws_iam_policy_document" "iam_policy_s3" {
  depends_on = [
    # aws_s3_bucket_public_access_block.bucket-public-access-block,
    aws_s3_bucket_ownership_controls.bucket-ownership-controls,
    aws_cloudfront_distribution.s3_distribution,
  ]
  statement {
    sid    = "AllowCloudFrontServicePrincipalReadOnly"
    effect = "Allow"
    resources = [
      "arn:aws:s3:::${var.domain_name}",
      "arn:aws:s3:::${var.domain_name}/*",
    ]
    actions = ["S3:GetObject"]
    principals {
        type = "Service"
        identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
        test = "StringEquals"
        variable = "AWS:SourceArn"
        values = [aws_cloudfront_distribution.s3_distribution.arn]
    }
  }
}

# resource "aws_s3_bucket_website_configuration" "bucket" {
#   bucket = aws_s3_bucket.b.bucket

#   index_document {
#     suffix = "index.html"
#   }

#   error_document {
#     key = "404.html"
#   }

# }

