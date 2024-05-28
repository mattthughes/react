import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comment, setComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,category,comment)
    }
    return (
        <div>
          <h2>Please fill out the form:</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='id-nme'>Your Name:</label>
              <input onChange={(e) => setName(e.target.value)} value={name} id='id-name' name='name' type="text" />
  
            </div>
            <div>
              <label htmlFor='id-category'>Query Category</label>
              <select onChange={(e) => setCategory(e.target.value)} value={category} id='id-category' name='category'>
                <option value='website'>Website issues</option>
                <option value='order'>Order issues</option>
                <option value='general'>General issues</option>
              </select>
            </div>
            <div>
              <label htmlFor='id-comments'>Comments:</label>
              <textarea onChange={(e) => setComment(e.target.value)} value={comment} id='id-comments' name='comments'></textarea>
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>
    )
}

export default ControlledFormHooks