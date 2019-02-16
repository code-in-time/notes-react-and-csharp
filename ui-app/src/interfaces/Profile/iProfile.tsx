import { iDetails } from './iDetails';
import { iAddress } from './iAddress';
import { iNote } from './iNote';

export interface iProfile
{
    Details: iDetails;
    Address: iAddress;
    Notes: iNote[];
}