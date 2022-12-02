/* eslint-disable @typescript-eslint/no-unused-vars */
const delay = (amout: 750) => new Promise((resolve) => setTimeout(resolve, amout));
type UserData = {
  email: string;
  password: string;
};
type PayloadData = {
  jwt: string | null;
  user: {
    username: string;
    avatar: string;
  };
};
const db = {
  email: 'bruno@gmail.com',
  password: '123',
};
const data: PayloadData = {
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  user: {
    username: 'brunosmaciel',
    avatar: 'https://github.com/brunosmaciel.png',
  },
};
export function api({ email, password }: UserData): Promise<PayloadData> {
  return new Promise((resolve, reject) => {
    if (email !== db.email) {
      reject(new Error('invalid'));
    }
    if (password !== db.password) {
      reject(new Error('invalid'));
    }

    setTimeout(() => {
      return resolve(data);
    }, 750);
  });

  // const db = {
  //   email: 'bruno@gmail.com',
  //   password: '123',
  // };
  // await delay(750);
  // if (email !== db.email) {
  //   throw new Error('Email ou senha invalido');
  // }
  // if (password !== db.password) {
  //   new Error('Email ou senha invalido');
  // }
  // const data: PayloadData = {
  //   jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  //   user: {
  //     username: 'brunosmaciel',
  //     avatar: 'https://github.com/brunosmaciel.png',
  //   },
  // };
  // return data;
}
