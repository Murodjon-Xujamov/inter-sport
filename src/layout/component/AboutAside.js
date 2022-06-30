import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Title from './Title';

const AboutAside = () => {
  return (
    <>
    <Tabs style={{marginBottom: '1.5rem'}}>
        <TabList>
            <Tab>Last match</Tab>
            <Tab>Next match</Tab>
        </TabList>
        <TabPanel>
            <img style={{width: '100%',height: 'auto'}} src='http://lokomotiv.uz/wp-content/uploads/2022/06/metallurg-3006.jpg' alt='not found' />
        </TabPanel>
        <TabPanel>
            <img style={{width: '100%',height: 'auto'}} src='http://lokomotiv.uz/wp-content/uploads/2022/06/sogdiana-01.jpg' alt='not found' />
        </TabPanel>
    </Tabs>
    <Title name='Таблица' mb='28' />
    <Tabs>
        <TabList>
            <Tab>Super liga</Tab>
            <Tab>Yoshlar ligasi</Tab>
        </TabList>
        <TabPanel>
            <table className='home-table'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Jamoa</th>
                        <th>O'yin</th>
                        <th>Ochko</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Pakhtakor </td>
                        <td>7</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bunyodkor</td>
                        <td>7</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nasaf</td>
                        <td>7</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Lokomotiv</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Metallurg</td>
                        <td>8</td>
                        <td>7</td>
                    </tr>
                    </tbody>
            </table>
        </TabPanel>
        <TabPanel>
            <table className='home-table'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Jamoa</th>
                        <th>O'yin</th>
                        <th>Ochko</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Pakhtakor </td>
                        <td>7</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bunyodkor</td>
                        <td>7</td>
                        <td>13</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nasaf</td>
                        <td>7</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Lokomotiv</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Metallurg</td>
                        <td>8</td>
                        <td>7</td>
                    </tr>
                    </tbody>
            </table>
        </TabPanel>
    </Tabs>
    </>
  )
}

export default AboutAside;