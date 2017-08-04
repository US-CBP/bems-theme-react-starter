// @flow

import React from 'react';
import { assert } from 'chai';
import { createShallow, getClasses } from 'material-ui//test-utils';
import ListItemText from 'material-ui/List/ListItemText';
import ListItemSecondaryAction from 'material-ui/List/ListItemSecondaryAction';
import { styleSheet } from 'material-ui/List/ListItem';
import ListItemExpandable from './ListItemExpandable';

describe('<ListItemExpandable />', () => {
    let shallow;
    let classes;

    before(() => {
        shallow = createShallow({ dive: true });
        classes = getClasses(styleSheet);
    });

    it('should render a div', () => {
        const wrapper = shallow(<ListItemExpandable component="div" />);
        assert.strictEqual(wrapper.name(), 'div');
    });

    it('should render a li', () => {
        const wrapper = shallow(<ListItemExpandable />);
        assert.strictEqual(wrapper.name(), 'li');
    });

    it('should render with the user, root and gutters classes', () => {
        const wrapper = shallow(<ListItemExpandable className="woof" />);
        assert.strictEqual(wrapper.hasClass('woof'), true);
        assert.strictEqual(wrapper.hasClass(classes.root), true);
        assert.strictEqual(wrapper.hasClass(classes.gutters), true, 'should have the gutters class');
    });

    it('should disable the gutters', () => {
        const wrapper = shallow(<ListItemExpandable disableGutters />);
        assert.strictEqual(wrapper.hasClass(classes.root), true);
        assert.strictEqual(wrapper.hasClass(classes.gutters), false, 'should not have the gutters class');
    });

    describe('prop: button', () => {
        it('should render a li', () => {
            const wrapper = shallow(<ListItemExpandable button />);
            assert.strictEqual(wrapper.props().component, 'li');
        });
    });

    describe('prop: component', () => {
        it('should change the component', () => {
            const wrapper = shallow(<ListItemExpandable button component="a" />);
            assert.strictEqual(wrapper.props().component, 'a');
        });
    });

    describe('context: dense', () => {
        it('should forward the context', () => {
            const wrapper = shallow(<ListItemExpandable />);
            assert.strictEqual(wrapper.instance().getChildContext().dense, false, 'dense should be false by default');

            wrapper.setProps({
                dense: true
            });
            assert.strictEqual(wrapper.instance().getChildContext().dense, true, 'dense should be true when set');
        });
    });

    describe('secondary action', () => {
        it('should wrap with a container', () => {
            const wrapper = shallow(
                <ListItemExpandable>
                    <ListItemText primary="primary" />
                    <ListItemSecondaryAction />
                </ListItemExpandable>
            );
            assert.strictEqual(wrapper.hasClass(classes.container), true);
        });
    });
});
