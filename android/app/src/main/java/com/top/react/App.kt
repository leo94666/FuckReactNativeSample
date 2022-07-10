package com.top.react

import android.app.Application
import com.facebook.react.BuildConfig
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainReactPackage
import com.swmansion.gesturehandler.RNGestureHandlerPackage


class App : Application(), ReactApplication {


    private var mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): MutableList<ReactPackage> {
            return mutableListOf(
                MainReactPackage(),
                RNGestureHandlerPackage()
            )
        }

        override fun getJSMainModuleName(): String {
            return super.getJSMainModuleName()
        }

    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }
}