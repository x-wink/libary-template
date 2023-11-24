import { describe, expect, test } from 'vitest';
import { sum } from '../src/index';

describe('DEMO', () => {
    test('demo 1', () => {
        expect(sum(1, 2)).equals(3);
    });
});
