import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listCategoriesAsync, searchProjectAsync, listProjectAsync } from '../../actions/actionProyectos';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaSearch } from "react-icons/fa";
import './styleslistarAll.css';

const ListFilters = () => {

    const dispatch = useDispatch();

    const { categories } = useSelector((store) => store.categories);
    console.log(categories);
    

    useEffect(() => {
        dispatch(listCategoriesAsync());
    }, []);

    // FORM -------------------------------------------
    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ({ search }) => {
            dispatch(searchProjectAsync(search))
            //console.log(search);
        }
    })

    return (
        <div className='first-container-filter'>
            <div className='container-title-filter'>
                <h3 className='title-filter'>Filtro de búsqueda</h3>
            </div>

            <div className='container-items-categorias'>
                <h4 className='title-categories-filter'>Buscar por categoría</h4>
                    <div className="categories-checkbox-filter">
                        <form onSubmit={formik.handleSubmit}>
                            <input
                                className="input-search-filter"
                                id="search"
                                name="search"
                                type="text"
                                aria-label="Search"
                                placeholder="Buscar categoría"
                                onChange={formik.handleChange}
                            />
                            <button
                                bg="warning"
                                variant="warning"
                                className="btn-search-filter"
                                type="submit"
                            >
                                <FaSearch />
                            </button>
                        </form>
                    </div>
            </div>

            <div className='container-items-categorias'>
                <h4 className='title-categories-filter'>Destacados y menos destacados</h4>
                <div className="categories-checkbox-filter">
                    
                    <label>
                        <input
                            className="checkbox-filter"
                            type="checkbox"
                            value="all"
                            id="all"
                        />
                            Más destacados
                    </label>
                    <label>
                        <input
                            className="checkbox-filter"
                            type="checkbox"
                            value="all"
                            id="all"
                        />
                            Menos destacados
                    </label>
                    <label>
                        <input
                            className="checkbox-filter checkbox-filter-two"
                            type="checkbox"
                            value="all"
                            id="all"
                            onClick={() => {
                                dispatch(listProjectAsync())
                            }}
                        />
                            Todos
                    </label>
                </div>
            </div>

            <div className='container-items-categorias'>
                <h4 className='title-categories-filter'>Categorías</h4>

                    <div className="categories-checkbox-filter">
                        {categories.map((e, i) => (
                            <label key={i}>
                                <input
                                    className="checkbox-filter"
                                    type="checkbox"
                                    value={e.id}
                                    id={e.id}
                                    onClick={() => {
                                        dispatch(searchProjectAsync(e.id))
                                    }}
                                />
                                {e.category}
                            </label>
                        ))}
                            <label>
                                <input
                                    className="checkbox-filter"
                                    type="checkbox"
                                    value="all"
                                    id="all"
                                    onClick={() => {
                                        dispatch(listProjectAsync())
                                    }}
                                />
                                Todas
                            </label>
                    </div>
                    
            </div>
        </div>
    )
};

export default ListFilters;