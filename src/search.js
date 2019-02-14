import React from 'react';

class Search extends React.Component{

    result=(event)=>{
        this.props.search(event.target.value)
    }

    render(){
        return (
        <div>
            <input placeholder="Search task" onChange={this.result}></input>
        </div>
        )};
}
export default Search;
