import React from 'react';
import ReactDOM from 'react-dom';
import request from 'axios';
import Backbone from 'backbone';

import Layout from './components/layout';
import AWSFilesList from './components/aws_files_list';
import Downloader from './components/downloader';

var files = new Backbone.Collection();

request.get(
  '/aws_files',
  {
    params: {
      Bucket: 'coding-challenges', Prefix: 'file_archiving/small_project'
    }
  }
).then((response) => {
  files.add(response.data.files);
});

const render = () => {
  ReactDOM.render(
    <Layout>
      <AWSFilesList files={files.toJSON()}/>
      <Downloader/>
    </Layout>,
    document.getElementById('root')
  );
};

render();
files.on('change reset add remove', render);
