// const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
const AWS_SDK = require('aws-sdk');

const s3Client = new AWS_SDK.S3();

exports.handler = async (event) => {
    console.log(event.Records[0].s3);
    const {
      bucket,
      object
    } = event.Records[0].s3;
    
    // let uploadedFile = await s3Client.send(new GetObjectCommand({
    //   Bucket: bucket.name,
    //   Key: object.name
    // }));
    
    let uploadedFile = await s3Client.getObject({
      Bucket: bucket.name,
      Key: 'data.json'
    }).promise();
    
    let jsonObject = JSON.parse(uploadedFile.Body.toString());
    
    jsonObject.key2 = 'value2';
    
    let newObject = await s3Client.putObject({
      Bucket: bucket.name,
      Key: 'data.json',
      Body: JSON.stringify(jsonObject), // what goes here?
    }).promise();
    
    console.log(jsonObject, newObject);
    
    // TODO implement
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};

