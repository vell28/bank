import React from 'react';

import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Skeleton } from '.';

const SkeletonRender = () => <div className="skeleton">Any component</div>;

describe('<Skeleton /> tests', () => {
  test('should success render, should render content if not loading', () => {
    const component: any = mount(
      <Skeleton render={<SkeletonRender />} isLoading={false}>
        <div className="any-content">Any</div>
      </Skeleton>,
    );

    const skeleton = component.find('.skeleton');
    expect(skeleton.length).toEqual(0);

    const content = component.find('.any-content');

    expect(content.length).toEqual(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  test('should success render, should render skeleton if loading', () => {
    const component: any = mount(
      <Skeleton render={<SkeletonRender />} isLoading>
        <div className="any-content">Any</div>
      </Skeleton>,
    );

    const skeleton = component.find('.skeleton');
    expect(skeleton.length).toEqual(1);

    const content = component.find('.any-content');

    expect(content.length).toEqual(0);
    expect(toJson(component)).toMatchSnapshot();
  });
});
