import React, { useEffect, useState } from 'react';
import className from 'classnames/bind';
import styles from './Contact.module.scss';
import request from '~/utils/request';
import { useNavigate } from 'react-router-dom';

const cx = className.bind(styles);

const Contact = ({ onSelectContact }) => {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const res = await request.get(`/api/users`);
                setContacts(res.data);
            } catch (error) {
                console.log(error.response.status);
                if (error.response.status === 500) {
                    navigate('/login');
                }
            }
        })();
    }, [navigate]);

    return (
        <>
            {contacts.length > 0
                ? contacts.map((result) => (
                      <div className={cx('contact')} key={result._id} onClick={() => onSelectContact(result)}>
                          <img alt="" height="40" src={result.profilePic} width="40" />
                          <div className={cx('name')}>{result.fullName}</div>
                          <div className={cx('status')}>
                              {/* <img alt="" height="20" src={result.status} width="20" /> */}
                          </div>
                      </div>
                  ))
                : null}
        </>
    );
};
export default Contact;
