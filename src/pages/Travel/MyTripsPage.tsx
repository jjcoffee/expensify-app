import React from 'react';
import {NativeModules} from 'react-native';
import FullPageNotFoundView from '@components/BlockingViews/FullPageNotFoundView';
import HeaderWithBackButton from '@components/HeaderWithBackButton';
import ScreenWrapper from '@components/ScreenWrapper';
import useLocalize from '@hooks/useLocalize';
import usePermissions from '@hooks/usePermissions';
import ManageTrips from './ManageTrips';

function MyTripsPage() {
    const {translate} = useLocalize();
    const {canUseSpotnanaTravel, isBlockedFromSpotnanaTravel} = usePermissions();

    return (
        <ScreenWrapper
            includeSafeAreaPaddingBottom={false}
            shouldEnablePickerAvoiding={false}
            shouldEnableMaxHeight
            testID={MyTripsPage.displayName}
            shouldShowOfflineIndicatorInWideScreen
        >
            <FullPageNotFoundView
                shouldForceFullScreen
                shouldShow={(!canUseSpotnanaTravel && !NativeModules.HybridAppModule) || (isBlockedFromSpotnanaTravel && !NativeModules.HybridAppModule)}
            >
                <HeaderWithBackButton
                    title={translate('travel.header')}
                    shouldShowBackButton
                />
                <ManageTrips />
            </FullPageNotFoundView>
        </ScreenWrapper>
    );
}

MyTripsPage.displayName = 'MyTripsPage';

export default MyTripsPage;
