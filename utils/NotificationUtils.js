import notifee from '@notifee/react-native';

export const onDisplayNotification = async () => {
  // konsep khusus Android yang digunakan untuk mengategorikan
  // dan memungkinkan pengguna mengontrol cara menangani notifikasi di perangkat mereka
  const channelId = await notifee.createChannel({
    id: 'my-channel',
    name: 'My Channel',
  });

  // Setelah saluran dibuat, displayNotification metode ini disebut meneruskan a title dan body.
  // Yang dibutuhkan channelId juga diteruskan di dalam android objek properti untuk menetapkan notifikasi ke saluran.
  await notifee.displayNotification({
    title: 'Notification Title',
    body: 'Body content of the notification',
    android: {
      channelId,
      smallIcon: 'ic_launcher', // optional, kita pakai yang default saja (yang sudah ada di asset android)
      pressAction: {
        id: 'default',
      },
    },
  });
};

export const onUpdateDisplayNotification = async () => {
  // konsep khusus Android yang digunakan untuk mengategorikan
  // dan memungkinkan pengguna mengontrol cara menangani notifikasi di perangkat mereka
  const channelId = await notifee.createChannel({
    id: 'my-channel',
    name: 'My Channel',
  });

  // Setelah saluran dibuat, displayNotification metode ini disebut meneruskan a title dan body.
  // Yang dibutuhkan channelId juga diteruskan di dalam android objek properti untuk menetapkan notifikasi ke saluran.
  await notifee.displayNotification({
    // id: '12345', setiap notifikasi otomatis akan mempunyai id yang unik
    // id tersebut dapat disertakan ketika ada kebutuhan memperbarui notifikasi,
    title: 'Updated Notification Title',
    body: 'Updated Body content of the notification',
    android: {
      channelId,
      smallIcon: 'ic_launcher', // optional, kita pakai yang default saja (yang sudah ada di asset android)
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
