# Class 18 - Dynamo DB and API Gateway (New Lambda things)

## Review

* s3 Buckets
  * File System in the cloud.
    * Save space on local hard drive.
    * Integrate files with other AWS services.
    * Faster reads and writes than your old computer.
    * Programmatic access to files from multiple computers.
  * Lab requires uploading images to s3.
  * Uploading images with Safari was not working :(.
    * VPNs causing issues.
* Permissions / Roles / Policies
  * Policy files
    * Effect (Allow / Deny)
    * Resource (ARN: bucket / lambda)
    * Actions (READ / WRITE / getObject / putObjects)
    * Principle (ARN: Users / Roles )
* Lambda Functions
  * Stateless / serverless functions.
  * Jacob often thinks of these as middleware.
  * Read the name of the object from s3, and the size / file type.
  * Write to the same bucket.
  * Hard to debug (we need to use a logging service to see output).
  * aws-sdk is pre-installed.

## API Gateway

An AWS version of Express!

### Lamdbas as Route Handlers

* Dynamoose ORM (mongoose for Dynamo DB)

### Dynamo DB

* NoSQL Document storage in the cloud
