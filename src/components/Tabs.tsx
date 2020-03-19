import React, {useCallback} from 'react';
import {Tab, TabsView} from "../styled/tabs";

interface TabProps {
    tabs: string[];
    selected: string;
    onChange: (tab: string) => void
}

export const Tabs = ({tabs, onChange, selected}: TabProps) => {
    const selectTab = useCallback((e) => onChange(e.target.dataset.value), [onChange]);

    return (
        <TabsView>
            {tabs.map(tab =>
                <Tab data-value={tab} key={tab} isActive={tab === selected} onClick={selectTab}>{tab}</Tab>)}
        </TabsView>
    );
};