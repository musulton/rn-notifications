import notifee, {AndroidImportance, EventType} from '@notifee/react-native';

export const onDisplayNotification = async notification => {
  // konsep khusus Android yang digunakan untuk mengategorikan
  // dan memungkinkan pengguna mengontrol cara menangani notifikasi di perangkat mereka
  const channelId = await notifee.createChannel({
    id: 'my-channel',
    name: 'My Channel',
    importance: AndroidImportance.HIGH,
  });

  // Setelah saluran dibuat, displayNotification metode ini disebut meneruskan a title dan body.
  // Yang dibutuhkan channelId juga diteruskan di dalam android objek properti untuk menetapkan notifikasi ke saluran.
  await notifee.displayNotification({
    // id: notification.messageId,
    title: notification.title,
    body: notification.body,
    android: {
      channelId,
      smallIcon: 'ic_launcher', // optional, kita pakai yang default saja (yang sudah ada di asset android)
      pressAction: {
        id: 'default',
      },
    },
  });
};

export const onMockDisplayNotification = async () => {
  const channelId = await notifee.createChannel({
    id: 'my-channel',
    name: 'My Channel',
  });

  await notifee.displayNotification({
    title: 'Notification Title',
    body: 'Body content of the notification',
    android: {
      channelId,
      smallIcon: 'ic_launcher',
      pressAction: {
        id: 'default',
      },
    },
  });
};

/*
Membatalkan semua / salah satu notifikasi
 */
export const onCancelDisplayNotification = async () => {
  await notifee.cancelAllNotifications();
  // await notifee.cancelNotification(notificationId, tag);
};

/*
Digunakan untuk membuat / menangani acara notifikasi saat aplikasi berada di latar depan(foreground)
Saat perangkat tidak terkunci, aplikasi sedang berjalan dan atau saat berada dalam tampilan aplikasi
 */
export const onForegroundEvent = () => {
  return notifee.onForegroundEvent(({type, detail}) => {
    switch (type) {
      case EventType.DISMISSED:
        // saat kita mengabaikan notifikasi yang muncul saat kita berada di latar depan
        // maka case ini akan berjalan
        console.log('User dismissed notification', detail.notification);
        break;
      case EventType.PRESS:
        // saat kita menekan notifikasi yang muncul saat kita berada di latar depan
        console.log('User pressed notification', detail.notification);
        break;
    }
  });
};

export const onBackgroundEvent = async () => {
  notifee.onBackgroundEvent(async ({type, detail}) => {
    const {notification, pressAction} = detail;

    if (type === EventType.ACTION_PRESS) {
      console.log('Pressed notification', pressAction.id);

      await notifee.cancelNotification(notification.id);
    }
  });
};
