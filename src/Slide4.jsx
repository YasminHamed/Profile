import React, { Component } from 'react';
import './App.css';

class Slide4 extends Component {
    render() {
        return (
            <div>
                <img class="d-block w-100" src="6676550.jpg"
                    alt="Second slide" />
                <div class="contact">
                    <form class="text-center border border-dark p-5" action="#!">
                        <p class="h4 mb-4">Contact</p>
                        <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name" />
                        <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail" />
                        <label>Subject</label>
                        <select class="browser-default custom-select mb-4">
                            <option value="" disabled>Choose option</option>
                            <option value="1" selected>Feedback</option>
                            <option value="2">Report a bug</option>
                            <option value="3">Feature request</option>
                            <option value="4">opnion</option>
                        </select>
                        <div class="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
                        </div>
                        <div class="custom-control custom-checkbox mb-4">
                            <input type="checkbox" class="custom-control-input" id="defaultContactFormCopy" />
                            <label class="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
                        </div>
                        <button class="btn btn-info btn-block" type="submit">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Slide4