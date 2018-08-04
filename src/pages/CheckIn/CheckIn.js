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

    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        <p>Check in</p>
        <Form
          onSubmit={() => {
   this.props.form.validateFields((err, values) => {
     debugger;
     if (!err) {

     }
   });
 }}

        >
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
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
