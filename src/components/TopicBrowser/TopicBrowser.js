import React, { Component } from 'react';

//Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import Product from '../Topics/Product'






class TopicBrowser extends Component {
    render() {
        return (
            <div>
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            <Product />
          </div>
        )
    }
}

export default TopicBrowser;
