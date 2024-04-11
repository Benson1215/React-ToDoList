import React, { Component } from 'react';
import axios from 'axios';
 
class TodoCreate extends Component {
    state = {
        title: "",
        isComplete: 0
    }
    render() {
        return (
        <div className="container">
 
        <h1>待辦事項清單 - 新增</h1>
        <hr />
        <div className="row">
            <div className="col-md-4">
                <form>
                   
                    <div className="form-group">
                        <label className="control-label" htmlFor="Name">項目名稱</label>
                        <input className="form-control" type="text" id="Name"
                            name="Name" value={this.state.title}
                            onChange={this.title_change}
                        />
                    </div>
                    <div className="form-group form-check">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="IsComplete"
                                name="IsComplete" value="1"
                                checked={this.state.isComplete}
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
        );
    }
    title_change = (e) => {
        var newState = {...this.state};
        newState.title = e.target.value;
        this.setState(newState);
    }
    isComplete_change = (e) => {
        var newState = {...this.state};
        newState.isComplete = e.target.checked;
        this.setState(newState);
    }
    ok_click = async (e) => {
        var dataToServer = {
            title: this.state.title,
            isComplete: this.state.isComplete ? 1 : 0
        }
        await axios.post("http://localhost:8000/todo/create", dataToServer);
        window.location = "/todo/index";
    }
}
 
export default TodoCreate;
