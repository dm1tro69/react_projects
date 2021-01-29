import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext()
    const searchValue = useRef('')

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    useEffect(()=> {
        searchValue.current.focus()
    }, [])

    const handleSubmit =(e)=> {
        e.preventDefault()

    }

  return (
    <section className={'section search'}>
        <form onSubmit={handleSubmit}  className="search-form">
            <div className="form-control">
                <label htmlFor="name">search your favorite cocktail</label>
                <input onChange={searchCocktail} type="text" id={'name'} ref={searchValue}/>
            </div>
        </form>
    </section>
  )
}

export default SearchForm
