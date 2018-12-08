package com.shareextension;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import android.os.Bundle; // required for onCreate parameter
import android.content.Intent;
import android.support.annotation.Nullable;


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "shareExtension";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                Intent intent = MainActivity.this.getIntent();
                Bundle bundle = new Bundle();
                if (intent.getStringExtra(Intent.EXTRA_TEXT) != null) {
                    bundle.putBoolean("shareExtension", true);
                    bundle.putString("url", intent.getStringExtra(Intent.EXTRA_TEXT));
                }
                return bundle;
            }
        };
    }
}
