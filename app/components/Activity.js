import React from 'react';
import { activities } from '../data/activities';
import Image from 'next/image';
import Link from 'next/link';

function Activity() {
    return (
        <div className="col-sm-12">
            <h2 className="section-title">Activity</h2>
            <ul className="activity">
                {
                    activities.map((item) => (
                        <li className="col-lg-12" key={item.id}>
                            <Link href="#">
                                
                                    <Image src="http://placehold.it/70x70" alt="" width={70} height={70} />
                                
                            </Link>
                            <div className="info">
                                <h5>
                                    {item.head}
                                    <Link href="#">
                                        {item.link}
                                    </Link>
                                </h5>
                                <p>{item.body}</p>
                                <h6>{item.time}</h6>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Activity;
