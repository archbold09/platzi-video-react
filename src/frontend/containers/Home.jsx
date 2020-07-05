import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss'
import Searcher from '../components/Searcher';
import Categories from '../components/Categories';
import Slider from '../components/Slider';
import Item from '../components/Item';

const Home = ({ myList, trends, originals, search }) => {
    return (
        <>
            <Searcher isHome />

            {
                search.length > 0 && (
                    <Categories children="Search">
                        <Slider>
                            {
                                search.map( item =>
                                    ( <Item key={item.id} {...item} /> )
                                )
                            }
                        </Slider>
                    </Categories>
                )
            }

            { myList.length != 0 &&
                (
                    <Categories children="Mi lista"/>,
                    <Slider>
                        {myList.map( item => 
                            <Item 
                                key={item.id}
                                {...item}
                                isList
                            />
                        )}
                    </Slider>
                )
            }

            <Categories children="Tendencias"/>
            <Slider>
                {
                    trends.map( item => 
                        <Item key={item.id} {...item} />
                    )
                }
            </Slider>


            <Categories children="Originales de PlatziVideo"/>
            <Slider>
                {
                    originals.map( item => 
                        <Item key={item.id} {...item} />
                    )
                }
            </Slider>

        </>
    )
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        search: state.search
    };
};

export default connect(mapStateToProps, null)(Home);