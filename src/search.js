import React from 'react';

class Search extends React.Component{

    result=(event)=>{
        this.props.search(event.target.value)
    }

    render(){
        return (
        <div>
            <input style={{width:'80%', height:40, marginBottom:10}} placeholder="Search task" onChange={this.result}></input>
        </div>
        )};
}
export default Search;
