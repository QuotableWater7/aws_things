import request from 'axios';

const awsParams = {
  Bucket: 'coding-challenges', Prefix: 'file_archiving/small_project'
}

export const fetchObjects = () => {
  return request.get(
    '/aws_files',
    {
      params: awsParams
    }
  )
};

export const archiveObjects = (files) => {
  return request.post(
    '/aws_archive',
    {
      params: {
        Bucket: awsParams.Bucket,
        Prefix: awsParams.Prefix,
        files: files.map((file) => {
          return { Key: file.Key, Size: file.Size }
        })
      }
    }
  );
};
