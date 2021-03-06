import React from 'react';
import {Layout, Flex, Fixed} from '../';


let Demo = React.createClass({

    render: function() {
        return (
            <Layout type="rows">
                <Fixed className="header">
                    Fixed Header
                </Fixed>
                <Flex>
                    <Layout type="columns">
                        <Fixed className="sidebar">
                            <Layout type="rows">
                                <Fixed>
                                    Top Left
                                </Fixed>
                                <Flex>
                                </Flex>
                                <Fixed>
                                    Bottom Left
                                </Fixed>
                            </Layout>
                        </Fixed>
                        <Flex className="content">
                            Flex Body
                        </Flex>
                        <Fixed className="sidebar">
                            <Layout type="rows">
                                <Fixed>
                                    Top Right
                                </Fixed>
                                <Flex>
                                </Flex>
                                <Fixed>
                                    Bottom Right
                                </Fixed>
                            </Layout>
                        </Fixed>
                    </Layout>
                </Flex>
                <Fixed className="header">
                    Fixed Footer
                </Fixed>
            </Layout>
        );
    }

});

React.render(<Demo />, document.body);