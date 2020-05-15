package com.reactlibrary;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

public class ToastModuleModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public ToastModuleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "ToastModule";
    }

    @ReactMethod
    public void sampleMethod(String stringArgument, int numberArgument, Callback callback) {
        // TODO: Implement some actually useful functionality
        callback.invoke("Received numberArgument: " + numberArgument + " stringArgument: " + stringArgument);
    }

    @ReactMethod
    public void showToast(String message) {

        Toast toast = new Toast(this.reactContext.getApplicationContext());
        View view = LayoutInflater.from(this.reactContext.getApplicationContext()).inflate(R.layout.custom_toast, null);

        GradientDrawable gradientDrawable   =   new GradientDrawable();
        gradientDrawable.setCornerRadii(new float[]{20, 20, 20, 20, 20, 20, 20, 20});
        String backgroundColor = "#3C3F4A";
        gradientDrawable.setColor(Color.parseColor(backgroundColor));
        view.setBackground(gradientDrawable);

        TextView textView = (TextView) view.findViewById(R.id.custom_toast_text);
        textView.setText(message);
        toast.setView(view);
        toast.setGravity(Gravity.BOTTOM|Gravity.CENTER, 0, 0);
        toast.setDuration(Toast.LENGTH_LONG);
        toast.show();
//         int duration = Toast.LENGTH_SHORT;
//
//         Toast toast = Toast.makeText(this.reactContext.getApplicationContext(), message, duration);
//         toast.show();
    }
}
