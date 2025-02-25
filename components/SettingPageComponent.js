import { useState } from "react";
import styles from "../styles/Settings.module.css";

const ChangeEmail = () => {
    return (
        <div className={styles.changeInformationField}>
            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>current password</label>
                <input type="password" />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>current email</label>
                <input type="text" />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>new email</label>
                <input type="text" />
            </div>
            <button className={styles.updateButton}>
                <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/save--v1.png" />
                update
            </button>
        </div>
    );
};

export function ShowChangeEmailField() {
    const [showSendOTP, setShowSendOTP] = useState(true);
    const [showInsertOTP, setShowInsertOTP] = useState(false);

    return (
        <div>
            {showSendOTP ? <SendOTPField /> : null}
            {showInsertOTP ? <InsertOTPField /> : null}
        </div>
    );

    function SendOTPField() {
        return (
            <div className={styles.changeInformationField}>
                <img className={styles.OTPimg} src="https://www.microcosm.com/images/smartsign/email.png" alt="Error" />
                <h2>OTP Verification</h2>
                <h3>
                    We will send an <b>One Time Password</b> to your registered email
                </h3>
                <button className={styles.OTPButton} onClick={SendOTPButtonOnCLick}>
                    Send
                </button>
            </div>
        );
    }

    function SendOTPButtonOnCLick() {
        setShowSendOTP(false);
        setShowInsertOTP(true);
    }

    function InsertOTPField() {
        return (
            <div className={styles.changeInformationField}>
                <img
                    className={styles.OTPimg}
                    src="https://ds9xi3hub5xxi.cloudfront.net/cdn/farfuture/otEn1mSO8Tk3mLVPFxYMCMwRn-qtie_ueonsviYMy0w/mtime:1608563955/sites/default/files/nodeicon/plugins_email-verification-plugin.png"
                    alt="Error"
                />
                <h2>OTP Verification</h2>
                <h3>We sent an OTP to your registered email. Enter the OTP to continue</h3>
                <div className={styles.InsertOTP}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <button className={styles.OTPButton}>Verify</button>
            </div>
        );
    }
}

export function ShowChangePasswordField() {
    return (
        <div className={styles.changeInformationField}>
            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>current password</label>
                <input type="password" />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>new password</label>
                <input type="password" />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.inputLabel}>confirm password</label>
                <input type="password" />
            </div>
            <button className={styles.updateButton}>
                <img src="https://img.icons8.com/ios-glyphs/90/FFFFFF/save--v1.png" />
                update
            </button>
        </div>
    );
}

export { ChangeEmail };
