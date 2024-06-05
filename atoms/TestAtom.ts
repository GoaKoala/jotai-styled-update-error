import { atom } from 'jotai';
import { TestAtomModel } from './TestAtomModel';
import { atomWithStorage } from 'jotai/utils';

const Test: TestAtomModel = {
    test: '',

};

export const TestAtom = atom(Test);