import { storyOf } from './story-utils';

describe('Story Utils', () => {
  describe('-> storyOf', () => {
    it.each`
      parameter | expected
      ${'X'}    | ${{ Component: 'X' }}
      ${0}      | ${{ Component: 0 }}
      ${true}   | ${{ Component: true }}
    `(
      'should return { Component: $parameter } when $parameter is given',
      ({ parameter, expected }) => {
        expect(storyOf(parameter)).toEqual(expected);
      },
    );
  });
});
