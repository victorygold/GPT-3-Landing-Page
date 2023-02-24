import React from 'react';
import './whatGPT3.css';
import "../../components/feature/Feature";
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
        <div className='gpt3__whatgpt3-feature'>
          <Feature title="What is GPT-3" text="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of." />
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title="Chatbots" text="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of." />
          <Feature title="Knowledgebase" text="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of." />
          <Feature title="Education" text="Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of." />
        </div>
    </div>
  )
}

export default WhatGPT3