import React,  { useState } from "react";

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState("");

    const onSubmit = event =>{
        event.preventDefault();
        onFormSubmit(term);
        //To Do: make sure we call the callback from the parent component
    }
    return (
    <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className = "ui form"> 
            <div className="field">
                <label>Search For A Video</label>
                <input 
                    type = "text" 
                    value ={term}
                    onChange={(event)=>setTerm(event.target.value)}
                />
            </div>
        </form>
    </div> 
)
};


/*class SearchBar extends React.Component{
    state = { term:""};

    onInputChange = event => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        //To Do: make sure we call the callback from the parent component
    }

    render(){
        return <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className = "ui form"> 
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type = "text" 
                        value ={this.state.term}
                        onChange={this.onInputChange}
                    />
                </div>
            </form>
        </div>
    }
}*/

export default SearchBar