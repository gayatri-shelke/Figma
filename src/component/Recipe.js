import React, { Component } from "react"
import axois from 'axios'


class recipeData extends Component{
    constructor(){
        super()
        this.state={
            Recipe:[]
        }
    }
    infoRecipeData=()=>
    {
        axois.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then((res)=>{
            console.log(res);
            this.setState({Recipe:res.data})
        })

    }
    render(){
        let {Recipe}=this.state
        return(
            <div>
            <button onClick={this.infoRecipeData()}>button</button>
            {Recipe.Map((Recipe)=>{
                return(
                    <div>
                    {Recipe.strMeal}
                    </div>
                )
            })}
        
            </div>
        )
    }
}
export default recipeData