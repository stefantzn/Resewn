import React, { useState } from 'react'
import "./pageStyles.css"
 
export default function SubSuggestionForm() {
  // Form data
  const [values, setValues] = useState({
    colors: "",
    colorBrightness: "",
    design: "",
    themes: "",
    style: "",
    fitted: "",
  })
   
  const [submitted, setSubmitted] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sweaterImages, setSweaterImages] = useState([])


  const handleColorInputChange = (event) => {
    setValues({...values, colors: event.target.value})
  }
  const handleColorBrightnessInputChange = (event) => {
    setValues({...values, colorBrightness: event.target.value})
  }
  const handleDesignInputChange = (event) => {
    setValues({...values, design: event.target.value})
  }
  const handleThemeInputChange = (event) => {
    setValues({...values, themes: event.target.value})
  }
  const handleStyleInputChange = (event) => {
    setValues({...values, style: event.target.value})
  }
  const handleFittedInputChange = (event) => {
    setValues({...values, fitted: event.target.value})
  }
 
  async function onSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts
 
    try {
      let preference_data = values.colors + " " + values.colorBrightness + " " + values.design + " " + values.themes + " " + values.style + " " + values.fitted
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences: preference_data })
      };
      const response = await fetch('http://localhost:8080/api/query-similar', requestOptions)
 
      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
 
      // Handle response if necessary
      const data = await response.json()
      setSweaterImages(data.sweaterImages);
      setSubmitted(true);
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }
 
  return (
    <div>
      <img src="/FormHeader.png" alt="Sustainable clothes header" className="form-header-image"/>
      <div className="image-transition"></div>
      <div className="form-block-container">
      <div className="big-header-block">
        <div className="header-block-column">&nbsp;</div>
        <div className="header-block-column">
            <p className="header-block-text">Find the sustainable fit that <strong>resonates</strong> best with your family</p>
        </div>
      </div>
      <form className="suggest-form" onSubmit={onSubmit}>
        <p className="form-question">What are your child's favourite colors?</p>
        <input
         value={values.colors}
         className="form-field"
         name="colors"
         onChange={handleColorInputChange}
         required
         />
         <p className="form-question">Does your child prefer bright, pastel, or neutral colors?</p>
        <input
         value={values.colorBrightness}
         className="form-field"
         name="colorBrightness"
         onChange={handleColorBrightnessInputChange}
         required
         />
         <p className="form-question">Do they like solid colors, patterns, or designs?</p>
        <input
         value={values.design}
         className="form-field"
         name="design"
         onChange={handleDesignInputChange}
         required
         />
         <p className="form-question">Are there any specific themes your child enjoys?</p>
        <input
         value={values.themes}
         className="form-field"
         name="themes"
         onChange={handleThemeInputChange}
         required
         />
         <p className="form-question">Would they like casual, formal, or sporty styles?</p>
        <input
         value={values.style}
         className="form-field"
         name="style"
         onChange={handleStyleInputChange}
         required
         />
         <p className="form-question">Do they prefer loose-fitting or fitted clothing?</p>
        <input
         value={values.fitted}
         className="form-field"
         name="fitted"
         onChange={handleFittedInputChange}
         required
         />
         <div className="form-button-wrapper">
            <button type="submit" className="form-button" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
            </button>
         </div>
         
      </form>
      
     {error && <div style={{ color: 'red' }}>{error}</div>}

     
      <div className="clothing-suggestion">
        <div className="suggest-header-wrapper">{submitted ? <p className="suggest-header">Sweater Suggestions</p> : <></>}</div>
        {sweaterImages.map((sweater, index) => (
          <img src={"http://localhost:8080/api/images/" + sweater} alt="Clothing suggestions" className="clothing-suggestion-item" key={index}></img>
        ))}
      </div>
      </div>
      
    </div>
  )
}