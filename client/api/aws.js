import request from 'axios';

export const fetchObjects = () => {
  return request.get(
    '/aws_files',
    {
      params: {
        Bucket: 'coding-challenges', Prefix: 'file_archiving/small_project'
      }
    }
  )
};
