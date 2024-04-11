import React, { Component } from 'react';
import axios from 'axios';//引用axios
 
class TodoIndex extends Component {
    state = {
        todoList: []
    }
    render() {
        return (
        <div className="container">
 
        <h1>
            待辦事項清單
            <a href="/Todo/Create" className="btn btn-outline-success btn-md float-right">
                新增
            </a>
        </h1>
 
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>
                        項目名稱
                    </th>
                    <th>
                        是否已完工
                    </th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {
                this.state.todoList.map( todo =>
                <tr key={todo.todoTableId}>
                    <td>
                        {todo.title}
                    </td>
                    <td>
                        <input className="check-box" disabled="disabled"
                            type="checkbox" checked={todo.isComplete} />
                    </td>
                    <td>
                        <span className="float-right">
                            <a href={`/Todo/Edit/${todo.todoTableId}`} className="btn btn-outline-primary btn-sm">編輯</a> 
                            <a href={`/Todo/Delete/${todo.todoTableId}`} className="btn btn-outline-danger btn-sm">刪除</a>
                        </span>
                    </td>
                </tr>
                )
                }
 
            </tbody>
        </table>
 
 
 
        </div>
 
        ); // end of redner()
    }
 
    componentDidMount = async () => {
        var result = await axios.get("http://localhost:8000/todo/list");
        var newState = {...this.state};
        newState.todoList = result.data;//將axios.get的資料(from資料庫)放回去newState.todoList
        this.setState(newState);//執行
    }
}
 
export default TodoIndex;
