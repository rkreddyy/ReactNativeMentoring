import Share from 'react-native-share';

class ShareService {
    share({ url, title, message }) {
        const options = {
            title,
            subject: title,
            message: `${message} ${url}`,
        };

        Share.open(options);
    }
}

export const shareService = new ShareService();