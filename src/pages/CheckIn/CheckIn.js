/* @flow */
/* eslint-disable */
/* eslint-disable no-debugger */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Form, Input, Icon, Button } from 'antd';

import styles from './styles.scss';

const FormItem = Form.Item;

// Export this for unit testing more easily
export class CheckIn extends Component {
	componentDidMount() {}

	render() {
		const { getFieldDecorator } = this.props.form;

		return(
			<div className={styles.Home}>
        <Helmet title="Home" />
        <p>Check in</p>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
              if (!err) {
                fetch('http://localhost:8080/check-in', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(values)
}).then((res) => {
  debugger;
}).catch((e) => {
debugger;
})
              }
            });
          }}
        >
          <FormItem>
            {getFieldDecorator('confNumber', {
              rules: [
                { required: true, message: 'Please input your confirmation #!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Confirmation #"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('lastName', {
              rules: [
                { required: true, message: 'Please input your last Name!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Last Name"
              />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form>
      </div>
		);
	}
}

const connector = connect();

const CheckInForm = Form.create()(CheckIn);

export default compose(
	withRouter,
	connector
)(CheckInForm);
