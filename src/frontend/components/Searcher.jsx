import React from 'react';
import classNames from 'classnames';
import { connect } from "react-redux";
import { searchVideo } from "../actions/index";
import '../assets/styles/components/Searcher.scss';

const Searcher = props => {
    const { isHome, searchVideo } = props

    const inputStyle = classNames('input',{
        isHome
    })
    const handleInput = () => {
        searchVideo(event.target.value)
    }
    return(
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className={inputStyle} onChange={handleInput} placeholder="search..." />
        </section>
    )
}
const mapDispatchToProps = { searchVideo }
export default connect(null, mapDispatchToProps) (Searcher)
