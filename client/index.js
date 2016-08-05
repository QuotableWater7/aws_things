import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';

import Layout from './components/layout';
import AWSFilesList from './components/aws_files_list';
import ArchiveBtn from './components/archive_btn';

import { fetchObjects } from './api/aws';

var files = new Backbone.Collection();

fetchObjects().then((response) => {
  files.add(response.data.files);
});


const render = () => {
  ReactDOM.render(
    <Layout>
      <AWSFilesList files={files.toJSON()}/>
      <ArchiveBtn/>
    </Layout>,
    document.getElementById('root')
  );
};

render();
files.on('change reset add remove', render);
