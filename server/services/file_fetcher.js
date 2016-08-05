const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: 'AKIAIUBYOXW7IGJNN4VA',
  secretAccessKey: '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',
});

export const fetchFiles = ({ Bucket, Prefix }) => {
  return new Promise((resolve, reject) => {

    s3.listObjects({ Bucket, Prefix }, (err, data) => {
      if (data) { resolve({ files: data.Contents }); }
    });

  });
};
