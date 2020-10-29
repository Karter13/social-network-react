import React from 'react';
import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';


describe('ProfileStatus component', () => {
    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={mockCallback}/>);
        const instance: any = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
