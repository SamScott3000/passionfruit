import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const TextBlock = ({ slice }) => (
  <section>
    <span className="subHeading">
      {
        slice.primary.subHeading ?
        <PrismicRichText field={slice.primary.subHeading}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .subHeading {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default TextBlock