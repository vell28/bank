import {
  defaultTo, pipe, not, isEmpty, equals, map, prop, isNil, complement
} from 'ramda';

export const defaultToZero = defaultTo(0);

export const defaultToEmptyString = defaultTo('');

export const defaultToEmptyPath = defaultTo({ path: '' });

export const defaultToEmptyObject = defaultTo({});

export const defaultToEmptyArray = defaultTo([]);

export const isNotEmpty = pipe(isEmpty, not);

export const isNotNil = pipe(isNil, not);

export const isNotZero = pipe(equals(0), not);

export const isNotEqual = complement(equals);

export const mapId = map(prop('_id'));

export const isTrue = equals(true);

export const notEqualProps = <T>(props: T, nextProps: T) => (field: keyof T) =>
  not(equals(nextProps[field], props[field]));
