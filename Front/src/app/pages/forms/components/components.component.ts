import { Component, OnInit } from '@angular/core';
import noUiSlider from 'nouislider';
import Dropzone from 'dropzone';
Dropzone.autoDiscover = false;
import Quill from 'quill';
import Selectr from 'mobius1-selectr';

@Component({
  selector: 'app-components',
  templateUrl: 'components.component.html'
})
export class FormsComponentsComponent implements OnInit {
  focus: any;
  focus1: any;
  focus2: any;
  focus3: any;
  focus4: any;
  focus5: any;

  tagItems = ['Bucharest', 'Cluj', 'Iasi', 'Timisoara', 'Piatra Neamt'];

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit() {
    const selectr: any = document.getElementById('selectr');
    const options = {};
    const optionsMultiple = { multiple: true };
    const selectorDefault = new Selectr(selectr, options);
    const selectrmultiple: any = document.getElementById('selectr-multiple');

    const selectorMultiple = new Selectr(selectrmultiple, optionsMultiple);

    // tslint:disable-next-line: one-variable-per-declaration
    const c: any = document.getElementById('input-slider'),
      d = document.getElementById('input-slider-value');

    noUiSlider.create(c, {
      start: 100,
      connect: [true, false],
      // step: 1000,
      range: {
        min: 100,
        max: 500
      }
    }),
      // tslint:disable-next-line: only-arrow-functions
      c.noUiSlider.on('update', function(a: { [x: string]: string; }, b: string | number) {
        d.textContent = a[b];
      });

    // tslint:disable-next-line: one-variable-per-declaration
    const c1: any = document.getElementById('input-slider-range'),
      d1 = document.getElementById('input-slider-range-value-low'),
      e = document.getElementById('input-slider-range-value-high'),
      f = [d1, e];

    noUiSlider.create(c1, {
      start: [
        // tslint:disable-next-line: radix
        parseInt(d1.getAttribute('data-range-value-low')),
        // tslint:disable-next-line: radix
        parseInt(e.getAttribute('data-range-value-high'))
      ],
      connect: !0,
      range: {
        // tslint:disable-next-line: radix
        min: parseInt(c1.getAttribute('data-range-value-min')),
        // tslint:disable-next-line: radix
        max: parseInt(c1.getAttribute('data-range-value-max'))
      }
    }),
      // tslint:disable-next-line: only-arrow-functions
      c1.noUiSlider.on('update', function(a: { [x: string]: string; }, b: string | number) {
        f[b].textContent = a[b];
      });

    // this variable is to delete the previous image from the dropzone state
    // it is just to make the HTML DOM a bit better, and keep it light
    let currentSingleFile: any;
    // single dropzone file - accepts only images
    // tslint:disable-next-line: no-unused-expression
    new Dropzone(document.getElementById('dropzone-single'), {
      url: '/',
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        'dz-preview-single'
      )[0],
      previewTemplate: document.getElementsByClassName('dz-preview-single')[0]
        .innerHTML,
      maxFiles: 1,
      acceptedFiles: 'image/*',
      init() {
        this.on('addedfile', function(file: any) {
          if (currentSingleFile) {
            this.removeFile(currentSingleFile);
          }
          currentSingleFile = file;
        });
      }
    });
    document.getElementsByClassName('dz-preview-single')[0].innerHTML = '';
    // this variable is to delete the previous image from the dropzone state
    // it is just to make the HTML DOM a bit better, and keep it light
    let currentMultipleFile: any;
    // multiple dropzone file - accepts any type of file
    // tslint:disable-next-line: no-unused-expression
    new Dropzone(document.getElementById('dropzone-multiple'), {
      url: 'https://',
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        'dz-preview-multiple'
      )[0],
      previewTemplate: document.getElementsByClassName('dz-preview-multiple')[0]
        .innerHTML,
      maxFiles: null,
      acceptedFiles: null,
      init() {
        // tslint:disable-next-line: only-arrow-functions
        this.on('addedfile', function(file: any) {
          if (currentMultipleFile) {
          }
          currentMultipleFile = file;
        });
      }
    });
    document.getElementsByClassName('dz-preview-multiple')[0].innerHTML = '';

    const quill = new Quill('#quill', {
      modules: {
        toolbar: [
          ['bold', 'italic'],
          ['link', 'blockquote', 'code', 'image'],
          [
            {
              list: 'ordered'
            },
            {
              list: 'bullet'
            }
          ]
        ]
      },
      placeholder: 'Quill WYSIWYG',
      theme: 'snow'
    });
  }
}
