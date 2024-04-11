import React, { Component } from 'react';
import axios from 'axios';
 
class TodoEdit extends Component {
    state = {
        todoItem: {}
    }
    render() {
            return (
            <div className="container">

                <h1>待辦事項清單 - 修改</h1>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <form action="/Todo/Edit" method="post">
                        
                            <div className="form-group">
                                <label className="control-label" htmlFor="Name">項目名稱</label>
                                <input className="form-control" type="text"
                                    id="Name" name="Name"
                                    value={this.state.todoItem.title}
                                    onChange={this.title_change}
                                />
                            </div>
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                    id="IsComplete" name="IsComplete"
                                    value="true"
                                    checked={this.state.todoItem.isComplete}
                                    onChange={this.isComplete_change}
                                    /> 是否已完工
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="button" value="確定"
                                    className="btn btn-outline-primary"
                                    onClick={this.ok_click}
                                /> |
                                <a href="/Todo/Index" className="btn btn-outline-info">取消</a>
                            </div>
                        </form>
                    </div>
                </div>
    
    
            </div>
            )
        }
        componentDidMount = async () => {
            var url = "http://localhost:8000/todo/item/" + this.props.match.params.id;
            var result = await axios.get(url);
            var newState = {...this.state};
            newState.todoItem = result.data;
            this.setState(newState);
        }
        title_change = (e) => {
            var newState = {...this.state};
            newState.todoItem.title = e.target.value;
            this.setState(newState);
        }
        isComplete_change = (e) => {
            var newState = {...this.state};
            newState.todoItem.isComplete = e.target.checked;
            this.setState(newState);
        }
        ok_click = async () => {
            var dataToServer = {...this.state.todoItem};
            dataToServer.isComplete = dataToServer.isComplete ? 1 : 0;
            var config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            await axios.put("http://localhost:8000/todo/item",
                JSON.stringify(dataToServer),
                config
            )
            window.location = "/todo/index";
        }
    
 
}
 
export default TodoEdit;
