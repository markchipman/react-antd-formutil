import React, { Component } from 'react';
import {
    Row,
    Col,
    Form,
    Input,
    InputNumber,
    Checkbox,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    DatePicker,
    Button
} from 'antd';
import { withForm } from 'react-formutil';
import { FormItem } from 'app/../../src';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};

const hobbiesOptions = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
];

const selectOption = Array(36)
    .fill('')
    .map((n, i) => <Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>)
    .slice(10);

const sliderMarks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
        style: {
            color: '#f50'
        },
        label: <strong>100°C</strong>
    }
};

//const mentionOptions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']

@withForm
class App extends Component {
    render() {
        return (
            <Row>
                <Col lg={12}>
                    <Form onSubmit={this.submit} style={{ padding: 20 }}>
                        <FormItem name="email" itemProps={{ ...formItemLayout, label: 'E-mail' }} required>
                            <Input />
                        </FormItem>

                        <FormItem
                            name="currency"
                            $defaultValue={1000}
                            itemProps={{ ...formItemLayout, label: 'Currency' }}
                            required>
                            <InputNumber
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            />
                        </FormItem>

                        <FormItem
                            name="checkbox.single"
                            itemProps={{ ...formItemLayout, label: 'Checkbox.single' }}
                            valuePropName="checked"
                            $defaultValue={true}
                            required>
                            <Checkbox>I agree</Checkbox>
                        </FormItem>

                        <FormItem
                            name="checkbox.multiple"
                            itemProps={{ ...formItemLayout, label: 'Checkbox.multiple' }}
                            $defaultValue={['Apple']}
                            required>
                            <Checkbox.Group options={hobbiesOptions} />
                        </FormItem>

                        <FormItem
                            name="rate"
                            itemProps={{ ...formItemLayout, label: 'Rate' }}
                            $defaultValue={2.5}
                            required>
                            <Rate allowHalf />
                        </FormItem>

                        <FormItem name="radio.single" itemProps={{ ...formItemLayout, label: 'Radio' }} required>
                            <Radio.Group options={hobbiesOptions} />
                        </FormItem>

                        <FormItem name="radio.button" itemProps={{ ...formItemLayout, label: 'Radio.Button' }} required>
                            <Radio.Group>
                                {hobbiesOptions.map(item => (
                                    <Radio.Button value={item.value} key={item.value}>
                                        {item.label}
                                    </Radio.Button>
                                ))}
                            </Radio.Group>
                        </FormItem>

                        <FormItem
                            name="select.single"
                            $defaultValue="c12"
                            itemProps={{ ...formItemLayout, label: 'Select.single' }}
                            required>
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                placeholder="Please select">
                                {selectOption}
                            </Select>
                        </FormItem>

                        <FormItem
                            name="select.multiple"
                            $defaultValue={['a10', 'c12']}
                            itemProps={{ ...formItemLayout, label: 'Select.multiple' }}
                            required>
                            <Select mode="multiple" style={{ width: '100%' }} placeholder="Please select">
                                {selectOption}
                            </Select>
                        </FormItem>

                        <FormItem
                            name="Slider.single"
                            $defaultValue={30}
                            itemProps={{ ...formItemLayout, label: 'Slider.single' }}>
                            <Slider marks={sliderMarks} />
                        </FormItem>
                        <FormItem
                            $defaultValue={[20, 50]}
                            name="Slider.range"
                            itemProps={{ ...formItemLayout, label: 'Slider.range' }}>
                            <Slider range marks={sliderMarks} />
                        </FormItem>

                        <FormItem
                            $defaultValue={true}
                            name="switch"
                            valuePropName="checked"
                            itemProps={{ ...formItemLayout, label: 'Switch' }}>
                            <Switch />
                        </FormItem>

                        <FormItem
                            name="datepicker.single"
                            $defaultValue={null}
                            itemProps={{ ...formItemLayout, label: 'DatePicker.single' }}>
                            <DatePicker />
                        </FormItem>

                        <FormItem
                            name="datepicker.month"
                            $defaultValue={null}
                            itemProps={{ ...formItemLayout, label: 'DatePicker.month' }}>
                            <DatePicker.MonthPicker />
                        </FormItem>
                        <FormItem
                            name="datepicker.range"
                            $defaultValue={null}
                            itemProps={{ ...formItemLayout, label: 'DatePicker.range' }}>
                            <DatePicker.RangePicker />
                        </FormItem>
                        <Row>
                            <Col sm={{ offset: 8 }}>
                                <Button type="primary" block>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col lg={6} style={{ padding: 20 }}>
                    <pre>{JSON.stringify(this.props.$formutil.$params, null, 2)}</pre>
                </Col>
                <Col lg={6} style={{ padding: 20 }}>
                    <pre>{JSON.stringify(this.props.$formutil.$errors, null, 2)}</pre>
                </Col>
            </Row>
        );
    }
}

export default App;
