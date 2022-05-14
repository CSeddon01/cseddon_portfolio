import React from 'react';
import Pdf from '../assets/docs/christine-seddon-resume.pdf';

export default function Resume() {
    return (
        <div className = "App col-lg-6 float-end">
          <a href = {Pdf} target = "_blank">Download Pdf</a>
        </div>
    )
}